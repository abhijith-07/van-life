import styled from "styled-components"


export default function Footer() {
    return(
        <footer>
          <Contact>
            <p>Add. 1 street pin 123456</p>
            <Copyright>copyright@2024</Copyright>
          </Contact>
        </footer>
    )
}


const Contact = styled.div`
  width: 100%;
  text-align: center;
  bottom: 0;
  background-color: #190d05;
  color: #f6f2f0;
  height: 60px;
  padding-top: 0.5em;
`

const Copyright = styled.p`
  display: block;
  width: 100%;
  color: #cbc8c6;
  font-size: .75rem;
`