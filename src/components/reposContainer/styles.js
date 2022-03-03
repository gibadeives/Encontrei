import styled from 'styled-components'

export const Section = styled.section`
width: 500px;
height: 500px;
background: black;
border-radius: 10px;
margin-top: 15px;


@media (max-width: 430px) {
    width: 300px;
}
`
export const Title = styled.h1`
fonte-size: 20px;
fonte-weight: 700;
margin-top: 10px;
color: white;
widht: 100%;
text-align: center;
height: 30px;
`

export const ListOfReposContainer = styled.h1`
height: 350px;
width: 100%;
padding: 10px;
overflow=y: scroll;
text-align: center;
`

export const Repo = styled.h2`
width: 100%;
height: 80px;
background: black;
border-radius: 5px;
padding: 10px;
margin-bottom: 10px;
text-align: center;
h2 {
    font-size: 15px;
    width: 100%;
    overflow: hidden;
    color: #444;
}
p{
    font-size: 12px;
    font-weight: 400;
    color: #777;
    widht: 100%;
    height: 30px;
    overflow: hidden;
    line-height: 1.3;
    margin-top: 10px;
    text-align: center;
}
`
