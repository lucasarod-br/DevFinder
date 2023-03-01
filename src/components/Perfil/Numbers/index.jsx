import React from 'react'
import styled from 'styled-components'
import Number from './Number'

const StyledNumbers = styled.div`
  background-color: ${props => props.theme.background};
  display: flex;
  justify-content: space-around;

  width: 100%;

  padding: 18px 15px;
  border-radius: 10px;
  margin-top: 23px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;

 }
  text-align: center;
 @media (min-width: 920px) {
  max-width: 480px;
  margin-left: 150px
 }
`

const Numbers = ({repos, followers, following}) => {
  return (
    <StyledNumbers>

    <Number name={'Repos'} value={repos}/>
    <Number name={'Followers'} value={followers}/>
    <Number name={'Following'} value={following}/>

    </StyledNumbers>
  )
}

export default Numbers