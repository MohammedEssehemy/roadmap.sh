import { HeaderWrap } from './style';

const SiteNav = () => (
  <HeaderWrap>
    <div className='top-row container'>
      <div className='flex-grow-1 brand'>
        <a href='/'>
          <img src='/brand.png' alt='' />
        </a>
      </div>
      <div className='nav-links'>
        <a href='/roadmaps'>Roadmaps</a>
        <a href='/guides'>Read</a>
        <a href='/watch'>
          Watch
          <span className='new-item' />
        </a>
      </div>

      <div className='ml-3 align-items-center d-none d-md-flex'>
        <iframe src="https://ghbtns.com/github-btn.html?user=kamranahmedse&repo=developer-roadmap&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="190px" height="30px"></iframe>
      </div>
    </div>
  </HeaderWrap>
);

export default SiteNav;
