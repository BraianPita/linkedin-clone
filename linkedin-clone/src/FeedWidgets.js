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
    <div className="feedwidgets__news">
        <div>
            <h4>Linkedin News</h4>
            <InfoIcon className='infoicon' />
        </div>
        <ul>
            {news.map((article, idx) => (
                <li key={idx}>
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



        <div className="feedwidgets__footer">
                <a href='#top' >About</a>
                <a href='#top' >Accessibility</a>
                <a href='#top' >Help Center</a>
                <a href='#top' >Privacy & Terms </a>
                <a href='#top' >Ad Choices</a>
                <a href='#top' >Advertising</a>
                <a href='#top' >Business Services </a>
                <a href='#top' >Get the LinkedIn app</a>
                <a href='#top' >More</a>
        </div>

        
    </div>
  )
}

export default FeedWidgets