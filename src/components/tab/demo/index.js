import React, { useState } from 'react';
import styled from 'styled-components';
import Tab from '..';
import AppBar from '../../appbar'


const Wrapper = styled.div`
display: flex;`


const Demo = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const arr = ['Dashboard', 'Team', 'Projects', 'Calendar']
  return (
    <div className='bg-orange-100 flex min-h-screen flex-col justify-evenly'>
      <Wrapper>
        <AppBar variant='dark'>

          {arr.map((value, index) => (
            <Tab
              key={index}
              id={index}
              variant='dark'
              onClick={() => {
                setSelectedIndex(index)
              }}
              isSelected={index === selectedIndex}
            >{value}</Tab>
          ))}
        </AppBar>
      </Wrapper>

      <Wrapper>
        <AppBar variant='light'>
          {arr.map((value, index) => (
            <Tab
              key={index}
              id={index}
              variant='gray'
              onClick={() => {
                setSelectedIndex(index)
              }}
              isSelected={index === selectedIndex}
            >{value}</Tab>

          ))}
        </AppBar> </Wrapper>

      <Wrapper>
        <AppBar
          variant='light'
        >
          {arr.map((value, index) => (
            <Tab
              key={index}
              id={index}
              variant='text'
              onClick={() => {
                setSelectedIndex(index)
              }}
              isSelected={index === selectedIndex}
            >{value}</Tab>
          ))}
        </AppBar></Wrapper>

      <Wrapper>
        <AppBar
          variant='light'
        >
          {arr.map((value, index) => (
            <Tab
              key={index}
              id={index}
              variant='color'
              onClick={() => {
                setSelectedIndex(index)
              }}
              isSelected={index === selectedIndex}
            >{value}</Tab>
          ))}
        </AppBar></Wrapper>

      <Wrapper>
        <AppBar
          variant='light'
        >
          {arr.map((value, index) => (
            <Tab
              key={index}
              id={index}
              variant='underline'
              onClick={() => {
                setSelectedIndex(index)
              }}
              isSelected={index === selectedIndex}
            >{value}</Tab>
          ))}
        </AppBar>
      </Wrapper>

    </div >
  );
};

export default Demo;