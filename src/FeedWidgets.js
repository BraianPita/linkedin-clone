import React from 'react'
import './FeedWidgets.css'

// Icons
import InfoIcon from '@mui/icons-material/Info';

const sample_news = [
    {
        title: "Fastest-growing jobs in the US",
        timeframe: "Top News",
        readers: 16844,
    },
    {
        title: "Finance execs warn bonuses will fall",
        timeframe: "3h ago",
        readers: 1994,
    },
    {
        title: "Citi 'coaching' some remote workers",
        timeframe: "2h ago",
        readers: 1372,
    },
    {
        title: "Microsoft to lay off 10,000 workers",
        timeframe: "2h ago",
        readers: 9531,
    }
]

const NewsWidget = ({news}) => (
    <div class="feedwidgets__news">
        <div>
            <h4>Linkedin News</h4>
            <InfoIcon className='infoicon' />
        </div>
        <ul>
            {news.map(article => (
                <li>
                    <h5>
                        {article.title}
                    </h5>
                    <p>
                        {article.timeframe} • {article.readers} readers
                    </p>
                </li>
            ))}
        </ul>
    </div>
);

const FeedWidgets = () => {
  return (
    <div className='feedwidgets'>
        <NewsWidget news={sample_news} />



        <div class="feedwidgets__footer">
                <a>About</a>
                <a>Accessibility</a>
                <a>Help Center</a>
                <a>Privacy & Terms </a>
                <a>Ad Choices</a>
                <a>Advertising</a>
                <a>Business Services </a>
                <a>Get the LinkedIn app</a>
                <a>More</a>
        </div>

        
    </div>
  )
}

export default FeedWidgets