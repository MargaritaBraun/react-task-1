import React, { Component, ErrorInfo, ReactNode } from 'react';

// Определим интерфейс для состояния
interface ErrorBoundaryState {
  hasError: boolean;
}

// Определим интерфейс для пропсов (пустой объект)
interface ErrorBoundaryProps {
    children: ReactNode; // Дочерние элементы могут быть любого типа
  }

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.log('Catch Horrooorrr', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Ошибка зарегистрирована:', error, errorInfo);
    // Здесь можно отправить ошибку на сервис для отчетности
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
