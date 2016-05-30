/**
 * Created by Eric-mac on 16/5/30.
 */
import * as constants from '../constants'
import { awaitFetch } from '../../utils/Utils'

export const trade = awaitFetch(constants.TRADE_URL)