import * as LocalStorage from '../../youtubeApi/LocalStorage'

const demos = ['63qdJfWENNg','QJTnibr5vjo','1dIpAKE8aAQ','91bdKjNQ_A8','m-FEDVo43uY',
'DLyqSQhS6E0','bDoh8zQDT38','f-fiIwIrOtc','KXtM5hHAa3g','DV2TLnMfoYo']

export const demoMovies = () => {
    demos.map( movie =>  {
        LocalStorage.addMovie(movie)
    })
}