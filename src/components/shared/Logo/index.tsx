import React from 'react';

import logoGrande from '../../../assets/logos/logo-branca.svg';
import logoPequena from '../../../assets/logos/colibri-branco.svg';

interface LogoCorretEasyGrandeProps {
  width?: string;
  height?: string;
}

export const LogoReservaGrande = (
  commomProps: LogoCorretEasyGrandeProps &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
): JSX.Element => {
  const { height } = commomProps;
  return (
    <div {...commomProps}>
      <img height={60} src={logoGrande} alt="Logo da CorretEasy" />
    </div>
  );
};

export const LogoReservaPequena = (
  commomProps: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
): JSX.Element => (
  <div {...commomProps}>
    <img height={40} src={logoPequena} alt="Pássaro da logo da Corrret" />
  </div>
);
