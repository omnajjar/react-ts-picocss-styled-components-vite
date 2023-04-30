import styled from 'styled-components';
import { ThemeSwitcher } from './components/ThemeSwitcher';

const MainWrapper = styled.main`
	margin-top: 100px;
`;

const HeaderWrapper = styled.h1`
	text-align: center;
`;

export default function App() {
	return (
		<>
			<MainWrapper className='container'>
				<HeaderWrapper>React Starter For Small Projects 🚀</HeaderWrapper>
			</MainWrapper>
			<ThemeSwitcher />
		</>
	);
}
