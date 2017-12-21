import dva from 'dva'; 
import history from './history.js'; 
const TOKEN_INVILAD = 'B101';
// 1. Initialize
const app = dva({
  history: history 
});

// 2. Plugins
// app.use({});

// 3. Model 

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
