import * as React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { DEFAULT } from '../../utils/defaultValues';
import { useParams } from 'react-router-dom';
import { FilmDetails, Actors, ActorsPagination } from '../../types_interfaces/filmDetails';
import { API } from '../../utils/defaultValues';
import Header from '../header';
import "./style.css"
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Cookies from 'js-cookie';
import LikeButton from '../likeButton';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FavouriteDispatch, FavoriteContext } from '../../context/favouriteContext';
import { FAVORITE_TYPES } from '../../reducer/types';


export default function FilmDetailsCard({actorsPerPage}: {actorsPerPage: number}): JSX.Element {
    const { id } = useParams<{ id: string }>();
    const { films, fetchedFav } = React.useContext(FavoriteContext);
    const favDispatch = React.useContext(FavouriteDispatch);

    const[filmDetails, setFilmDetails] = React.useState<FilmDetails>({
        origin_country: DEFAULT.EMPTY_STRING,
        release_date: DEFAULT.EMPTY_STRING,
        title: DEFAULT.EMPTY_STRING,
        budget: DEFAULT.ZERO,
        runtime: DEFAULT.ZERO,
        poster_path: DEFAULT.EMPTY_STRING,
        id: DEFAULT.EMPTY_STRING
    });
    const token = Cookies.get('token');
    const [actors, setActors] = React.useState<Actors[]>([]);
    const [actorsPagination, setActorsPagination] = React.useState<ActorsPagination>({
        current: 1,
        total: 0,
        actorsPerPage: actorsPerPage
    })

    const firstIndex = (actorsPagination.current - 1) * actorsPagination.actorsPerPage;
    const lastIndex = firstIndex + (actorsPerPage) 
    const sliced = actors.slice(firstIndex, lastIndex)

    React.useEffect(() => {
        setActorsPagination((prevState: ActorsPagination) => ({
            ...prevState,
            total: Math.ceil(actors.length/ actorsPerPage)
        }))
    }, [actors])

    React.useEffect(()=> {
        if(token) {
            const url = `${API.DETAILS}${id}`;
            const urlActors = `${API.DETAILS}${id}/credits`;
            const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        };

        fetch(urlActors, options)
        .then(res => res.json())
        .then(json => {
            setActors(()=> (
                [...json.cast.map((item: Actors)=> ({name: item.name, profile_path: item.profile_path}))]
            ))
        })
        .catch(err => console.error('error:' + err));

        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            setFilmDetails(json)
        })
        .catch(err => console.error('error:' + err));
        }
    }, [])

    return (
        <>
        <Header/>
        <div className='container'>
            <div className="details-wrapper">
                <img 
                    src={`${API.IMG}w500${filmDetails.poster_path}`} 
                    alt="film picture" 
                    style={{height: '500px'}}
                />
                <div className="info">
                    <h1> {filmDetails.title} {(filmDetails.release_date)} 
                        <LikeButton movieId={id} />
                    </h1> 
                    <ArrowBackIosIcon/>
                    <div className="actors">
                        <ul style={{display:'flex'}}>
                            {sliced.map((item)=> (
                                <>
                                    
                                    <img 
                                        src={`${API.IMG}w200${item.profile_path}`}
                                    />
                                    <p style={{}}>{item.name}</p>
                                </>
                            ))}
                        </ul>
                        <Pagination
                        page={actorsPagination.current}
                        count={actorsPagination.total}
                        onChange={(event, value) => setActorsPagination((prevState: ActorsPagination)=> ({
                            ...prevState,
                            current: value
                        }))}
                        renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
            )}
        />
                    </div>
                    <div className="details">
                        <h3>Details:</h3>
                        <p>Country: {filmDetails.origin_country}</p>
                        <p>Year: {filmDetails.release_date}</p>
                        <p>Scenario: {filmDetails.origin_country}</p>
                        <p>Box office: {filmDetails.budget}</p>
                        <p>Time: {filmDetails.runtime} min</p>
                    </div>
            </div>
            </div>
            </div>
        </>
    )
}
