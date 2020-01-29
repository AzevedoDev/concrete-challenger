import { css } from 'styled-components';
import { colors } from '../../styles/colors';

export default {
  Details: css`
    font-family: 'Raleway';
    font-size: 20px;
    font-weight: 300;
    color: ${colors.secondary};
  `,

  Repos: css`
    font-family: 'Raleway';
    font-size: 35px;
    color: ${colors.primary};
  `,

  UserName: css`
    font-family: 'Raleway';
    font-size: 35px;
    font-weight: 300;
  `,

  NotFound: css`
    font-family: 'Raleway';
    font-size: 40px;
    color: ${colors.primary};
  `,

  TextStyle2: css`
    font-family: 'Raleway';
    font-size: 20px;
    font-weight: 300;
  `,

  LogoSpan: css`
    font-family: 'Raleway';
    font-size: 60px;
    font-weight: 200;
    font-style: italic;
    @media (max-width: 600px) {
      font-size: 10vw;
    }
  `,

  TextLogoHeader: css`
    font-family: Monaco;
    font-size: 40px;
    @media (max-width: 600px) {
      font-size: 10vw;
    }
  `,

  Logo: css`
    font-family: Monaco;
    font-size: 60px;
    @media (max-width: 600px) {
      font-size: 10vw;
    }
  `,
};
