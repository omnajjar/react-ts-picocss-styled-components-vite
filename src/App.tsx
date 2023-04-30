import styled from 'styled-components';
import { ThemeSwitcher } from './components/ThemeSwitcher';

const MainWrapper = styled.main`
	margin-top: 100px;
`;

const HeaderWrapper = styled.h2`
	text-align: center;
`;

const TextWrapper = styled.p`
  text-align: center;
`;

export default function App() {
  return (
    <>
      <MainWrapper className='container'>
        <HeaderWrapper>🔥 Vite + React + TypeScript + Pico CSS + Styled Components 🔥</HeaderWrapper>
        <TextWrapper>
          Are you starting a small react project, then this template is for you, powered by:
        </TextWrapper>
      </MainWrapper>
      <ThemeSwitcher />
    </>
  );
}
