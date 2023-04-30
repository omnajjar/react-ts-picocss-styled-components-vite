import styled from 'styled-components';
import { ThemeSwitcher } from './components/ThemeSwitcher';

const MainWrapper = styled.main`
	margin-top: 100px;
`;

const CenteredTextWrapper = styled.div`
	text-align: center;
`;

export default function App() {
	return (
		<>
			<MainWrapper className='container'>
				<CenteredTextWrapper>
					<h2>🚀 Vite + React + TypeScript + Pico CSS + Styled Components 🔥</h2>
					<hr></hr>
				</CenteredTextWrapper>
				<p>
					A small react project starter, perfect for very small apps a beautiful minimal setup,
					powered by:
				</p>
				<ul>
					<li>
						<a href='https://react.dev/' target='_blank' rel='noreferrer'>
							{'React(Typescript) ✨'}
						</a>
					</li>
					<li>
						<a href='https://picocss.com/' target='_blank' rel='noreferrer'>
							{'Pico CSS(Minimal CSS Framework) 🎨'}
						</a>
					</li>
					<li>
						<a href='https://styled-components.com/' target='_blank' rel='noreferrer'>
							{'Styled Components 💅'}
						</a>
					</li>
				</ul>
				<p>And 🔋 batteries are included:</p>
				<ul>
					<li>Dark Theme By Default</li>
					<li>
						<a href='https://prettier.io/' target='_blank' rel='noreferrer'>
							Prettier
						</a>
					</li>
					<li>
						<a href='https://eslint.org/' target='_blank' rel='noreferrer'>
							Eslint
						</a>
					</li>
				</ul>
			</MainWrapper>
			<ThemeSwitcher />
		</>
	);
}
