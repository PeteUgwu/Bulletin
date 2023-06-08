import React from 'react';
import S from '../../style/component/home/header.module.scss';

const Header = () => (
  <>
    <div className={`${S.headerContainer}`}>
      <div className={`${S.landingImage}`}>
        <img
          src="https://media.istockphoto.com/id/1354169883/photo/focus-on-female-podcaster-live-streaming-show.jpg?s=612x612&w=0&k=20&c=l_rn8Dfcoc7nP3sMv64nfW3TdCDsz5tQjvOjdr51cpM="
          alt="Broadcaster"
        />
      </div>
      <div className={`${S.introContent}`}>
        <h1 className={`${S.welcomeText}`}>Hello, Welcome!!!</h1>
        <p>
          Lorem Ipsum has been the industry standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
    </div>
  </>
);

export default Header;
