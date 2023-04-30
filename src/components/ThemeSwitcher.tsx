import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useTheme } from '~/contexts/ThemeContext';

const ThemeSwitcherWrapper = styled.div`
	position: fixed;
	top: 0px;
	right: 15px;
`;

const EmojiWrapper = styled.span`
	font-size: 40px;
	position: relative;
	top: 8px;
	margin-right: 15px;
`;

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();
	return ReactDOM.createPortal(
		<ThemeSwitcherWrapper>
			<label htmlFor='themeSwitch'>
				<EmojiWrapper>{theme === 'dark' ? '🌛' : '🌞'}</EmojiWrapper>
				<input
					type='checkbox'
					name='themeSwitch'
					role='switch'
					onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				/>
			</label>
		</ThemeSwitcherWrapper>,
		document.body
	);
}
