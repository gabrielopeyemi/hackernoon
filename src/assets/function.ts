
  export const handleHeart = (like: any, setHeartLight: any, heartLight: any, setLike: any) => {
    setHeartLight(!heartLight)
    console.log(heartLight)
    if (heartLight) {
      setLike(like + 1)
    } else {
      setLike(like - 1)
    }
  };
  // export const handleLight = (like: any) => {
  //   setLightLight(!boatLight)
  //   console.log(heartLight)
  //   if (lightLight) {
  //     setLike(like + 1)
  //   } else {
  //     setLike(like - 1)
  //   }
  // };
  // export const handleBoat = (like: any) => {
  //   setBoatLight(!heartLight)
  //   console.log(boatLight)
  //   if (boatLight) {
  //     setLike(like + 1)
  //   } else {
  //     setLike(like - 1)
  //   }
  // };
  // export const handleMoney = (like: any) => {
  //   setMoneyLight(!moneyLight)
  //   console.log(heartLight)
  //   if (moneyLight) {
  //     setLike(like + 1)
  //   } else {
  //     setLike(like - 1)
  //   }
  // };