import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { Tooltip, Grow } from '@mui/material';
import "./Home.css"
function Watchlist({stock,  key}) {
  const [showWatchlistActions, setSowWatchlistActions] = useState(false);
  
  const handleMouseEnter = (e) => {
    setSowWatchlistActions(true);
  }
  
  const handleMouseLeave = (e) => {
    setSowWatchlistActions(false);
  }

    return ( 
          <li key={key} className='items border-bottom'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            <p className={stock.isDown? "red" : "green"}>{stock.name}</p>
        
              <div>
                <span className='text-muted'>{stock.percent}</span>
                <span>{stock.isDown ? <KeyboardArrowDownIcon></KeyboardArrowDownIcon> : <KeyboardArrowUpIcon></KeyboardArrowUpIcon>  }</span>
                <span>{stock.price}</span>
                </div>
                {/* {showWatchlistActions && <watchlistAction uid={stock.name}/>} */}
          </li>
     );
}
const watchlistAction = ({uid}) => {
  return(
    <span className='actions'>
      <span>
        <Tooltip
        title="Buy (B)"
        placement="top"
        arrow>
        <Accordion
        TransitionComponent={Grow}
        slots={{ transition: Grow }}
        />
           <button className='buy'>Buy</button>
        </Tooltip>

        <Tooltip
        title="sell (S)"
        placement="top"
      
        arrow
        TransitionComponent
        ={Grow}>
        <Accordion
        TransitionComponent={Grow}
        slots={{ transition: Grow }}
        />
           <button className='sell'>Sell</button>
        </Tooltip>
      </span>
    </span>
  )
}


export default Watchlist;

