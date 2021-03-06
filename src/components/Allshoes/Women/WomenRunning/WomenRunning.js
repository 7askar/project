import React from 'react';

// import './WomenRunning.css';
import AllShoes_Navbar from '../../AllShoes_Navbar/AllShoes_Navbar';
import ShoeComponent from '../../ShoeComponent/ShoeComponent';
import AllShoes from '../../AllShoes.css';

const Pegasus37 =   'https://i.imgur.com/apk4MNh.jpg';
const Fly3 = 'https://i.imgur.com/eXvdkRu.jpg';
const InfinityRun = 'https://i.imgur.com/Z92VTJx.jpg';
const AllDay = 'https://i.imgur.com/qUaz0DF.jpg';
const PhantomRun = 'https://i.imgur.com/SHLagEE.jpg';
const React3 = 'https://i.imgur.com/UkZEr8k.jpg';
const Flex8 = 'https://i.imgur.com/aycvQke.jpg';

const WomenRunning = () => {
  return (
    <div className="allShoes">
      <AllShoes_Navbar 
        title="Women's"
        pathGym="/women/gym"
        pathJordan="/women/jordan"
        pathWalking="/women/running"
        pathFootball="/women/football"
        pathAthletics="/women/tennis"
        pathBasketball="/women/basketball"
      />
      <div className="allShoes__shoes">
        <ShoeComponent 
          image={Pegasus37}
          id="440000"
          title="Nike Air Zoom Pegasus 37"
          before={130}
          after={100}
          category="Women's Running Shoe"
        />
        <ShoeComponent 
          image={Fly3}
          id="440001"
          title="Nike Zoom Fly 3"
          before={210}
          after={170}
          category="Women's Running Shoe"
        />
        <ShoeComponent 
          image={InfinityRun}
          id="440002"
          title="Nike React Infinity Run"
          before={190}
          after={165}
          category="Women's Running Shoe"
        />
        <ShoeComponent 
          image={AllDay}
          id="440003"
          title="Nike Run All Day 2"
          before={75}
          after={50}
          category="Women's Running Shoe"
        />
        <ShoeComponent 
          image={PhantomRun}
          id="440004"
          title="Nike React Phantom Run"
          before={170}
          after={170}
          category="Women's Running Shoe"
        />
        <ShoeComponent 
          image={React3}
          id="440005"
          title="Nike Legend React 3"
          before={115}
          after={90}
          category="Women's Running Shoe"
        />
        <ShoeComponent 
          image={Flex8}
          id="440006"
          title="Nike Flex Experience RN 8"
          before={55}
          after={40}
          category="Women's Running Shoe"
        />
      </div>
    </div>
  );
}

export default WomenRunning;