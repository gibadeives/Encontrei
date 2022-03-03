import React, { useState, useContext } from 'react'
import { FiSearch } from 'react-icons/fi'
import client from '../../services/client'
import { context } from '../../context'

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles'


const Header = () => {
const ctx = useContext(context)

    const [searchedValue, setSearchedValue] = useState('')

    async function getUserData(){

        try {
            const response = await client.get(`/${searchedValue}`)
            const repos = await client.get(`/${searchedValue}/repos`)
            ctx.setUserData(response.data)
            ctx.setRepos(repos.data)
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <HeaderSection>
            <HeaderTitle>S E A R C H</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput value={searchedValue} onChange={e => setSearchedValue(e.target.value)} />

                <HeaderSearchButton onClick={getUserData}>
                    <FiSearch size={20} />
                </HeaderSearchButton>
            </HeaderInputContainer>
        </HeaderSection>
    )
}

export default Header