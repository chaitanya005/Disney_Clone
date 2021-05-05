import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Recommends from './Recommends'
import NewDisney from './NewDisney'
import Originals from './Originals'
// import Trending from './Trending'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import db from '../firebase'
import { setMovies } from '../features/movie/movieSlice'
import { getUserName } from '../features/user/userSlice'

const Home = () => {

    const dispatch = useDispatch()
    const userName = useSelector(getUserName)
    let recommends = [];
    let original = [];
    let newDisneys = [];


    

    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch(doc.data().type) {
                    case 'recommend':
                        // console.log(recommends)
                        // recommends.push({id: doc.id, ...doc.data()})
                        recommends = [...recommends, {id: doc.id, ...doc.data()}]
                        break;
                    case 'new':
                        // newDisneys.push({id: doc.id, ...doc.data()})
                        newDisneys = [...newDisneys, {id: doc.id, ...doc.data()}]
                        break;
                    case 'original':
                        // original.push({id: doc.id, ...doc.data()})
                        original = [...original, {id: doc.id, ...doc.data()}]
                        break;
                }
            })
            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                orignals: original
            }))
        })

    

    }, [userName])

    return (
        <Container>
           <ImgSlider />
           <Viewers /> 
           <Recommends />
           <NewDisney />
           <Originals />
        </Container>
    )
    
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    
    &:after {
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`

export default Home