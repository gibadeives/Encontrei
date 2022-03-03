import { Section, Title, ListOfReposContainer, Repo } from './styles'

const ReposContainer = props => {
    return(
        <Section>
            <Title>Repositórios de {(props.name)?.split(' ')[0]} </Title>
            <ListOfReposContainer>
                {(props?.repos).map(repos => (
                    <Repo onClick={()=> window.location.href(repos?.html_url)} key={repos?.id}>
                        <h2>{repos?.name} </h2>
                        <p>{repos?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
    )
}
export default ReposContainer                                   