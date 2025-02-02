import React, { ReactNode, ErrorInfo } from 'react';

// Определим интерфейс для состояния
interface ErrorBoundaryState {
  errorMessage: string;
}

// Определим интерфейс для пропсов
interface ErrorBoundaryProps {
  children: ReactNode; // Дочерние элементы могут быть любого типа
}

class MyErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    errorMessage: '',
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Используем оператор нулевого слияния для обработки null и undefined
    const componentStack = info.componentStack ?? 'Нет информации о компоненте';
    this.logErrorToServices(error.toString(), componentStack);
  }

  // Фейковая служба логирования
  logErrorToServices = (errorMessage: string, componentStack: string) => {
    console.log(
      'Logged error:',
      errorMessage,
      'Component stack:',
      componentStack
    );
  };

    render() {
      console.log('MyErrorBoundary', this.state.errorMessage)
    if (this.state.errorMessage) {
      return <p>{this.state.errorMessage}</p>;
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;

// import React, { Component, ErrorInfo, ReactNode } from 'react';

// // Определим интерфейс для состояния
// interface ErrorBoundaryState {
//   hasError: boolean;
// }

// // Определим интерфейс для пропсов (пустой объект)
// interface ErrorBoundaryProps {
//   children: ReactNode; // Дочерние элементы могут быть любого типа
// }

// class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
//   constructor(props: ErrorBoundaryProps) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error: Error) {
//     console.log('Catch Horrooorrr', error);
//     return { hasError: true };
//   }

//     componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//         console.log('ErrorBoundary render ');
//     console.error('Ошибка зарегистрирована:', error, errorInfo);
//     // Здесь можно отправить ошибку на сервис для отчетности
//     // logErrorToMyService(error, errorInfo);
//   }

//     render() {
//         console.log('ErrorBoundary render ');
//         console.log('this.state.hasError ', this.state.hasError);
//     if (this.state.hasError) {
//       return <h1>Что-то пошло не так.</h1>;
//     } else {
//         return this.props.children;
//     }

//   }
// }

// export default ErrorBoundary;
