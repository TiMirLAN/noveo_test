import { applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

export default applyMiddleware(
  ReduxThunk
)
