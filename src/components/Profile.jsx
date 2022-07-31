export const Profile = () => {
  return (
    <main className='main'>
        <div className='main-img-wrapper'>
          <img className='main-img' src='http://www.cita.com.ua/img/ntours/big/4/1599228157.jpg' alt='main-img'></img>
        </div>
        <div className='about'>
          <img className='about__img' src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg' alt='main-img'></img>
          <div className='description-wrapper'>Info</div>
        </div>
        <div className='posts'>
          <div className='posts-input-wrapper'>
            <input className='posts__input' value='New post'></input>
            <button className='posts__button'>Send</button>
          </div>
          <article className='posts__post'>Post N2</article>
          <article className='posts__post'>Post N1</article>
        </div>
      </main>
  );
}