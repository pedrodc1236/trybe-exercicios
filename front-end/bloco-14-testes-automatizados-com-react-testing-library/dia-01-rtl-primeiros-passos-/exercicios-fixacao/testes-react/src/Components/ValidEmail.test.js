import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

describe('Testes de validez do Email', () => {
  test('Testando um componente, caso o email seja válido.', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });
  test('Testando um componente, caso o email seja inválido', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });
  test('Testando se a mensagem não aparece caso o email ainda não tenha sido enviado', () => {
    const EMAIL_USER = '';
    render(<ValidEmail email={ EMAIL_USER } />);
    const notEmail = screen.queryByTestId('id-is-email-valid')
    expect(notEmail).not.toBeInTheDocument();
  })
  test('Testando se caso o email seja válido a cor de fundo dele é verde', () => {
    const EMAIL_USER = 'email@email.com'
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByTestId('id-is-email-valid');
    expect(isValid).toHaveAttribute('class', 'green-text')
  })
  test('Testando se caso o email seja inválido a cor de fundo dele é vermelho', () => {
    const EMAIL_USER = 'emailerrado'
    render(<ValidEmail email={ EMAIL_USER } />)
    const isInvalid = screen.getByTestId('id-is-email-valid');
    expect(isInvalid).toHaveAttribute('class', 'red-text')
  })
});