import ReactDom from 'react-dom';
import { App } from './App';

ReactDom.render(<App />, document.getElementById('root'));

const isDevelopment = process.env.NODE_ENV === 'production';

if (isDevelopment && module?.hot) {
    module.hot.accept();
}