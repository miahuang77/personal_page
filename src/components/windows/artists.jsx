import artist1 from '/assets/images/gaudi.png'
import artist2 from '/assets/images/daqian.jpg'
import artist3 from '/assets/images/daqian2.jpg'
import artist4 from '/assets/images/monet.png'
import artist5 from '/assets/images/monet2.jpg'
import artist6 from '/assets/images/yayoi.jpg'
import artist7 from '/assets/images/yayoi2.jpg'

function Artists() {
  return (
    <div className="artists-window-content">
       <h2>Some Artists Mia Appreciates</h2>

<div className="artists-photos-scroll">
  <img src={artist6} />
  <img src={artist7} />
  <img src={artist2} />
  <img src={artist3} />
  <img src={artist4} />
  <img src={artist5} />
  <img src={artist1} />
</div>

        <h3 className="artist-name">
          <b>Yayoi Kusama</b></h3>
          <p>
            Yayoi Kusama is Mia's favourite contemporary artist!
            </p>
            <p>
Yayoi is famous for her colourful polka dots and immersive mirror installations that were 
inspired by the hallucinations she experienced since childhood. 
Hopefully, Mia can get a chance to visit her museum in Shinjuku, 
Japan at some point in the future:D
          </p>

          <h3 className="artist-name">
          <b>Daqian Zhang</b></h3>
          <p>
Mia learned Chinese ink painting for a few years when she was young and was impressed by the dedication of Daqian,
 an ink painter who spent his whole life studying and carefully,
 manually copying ancient artwork from Mogao Caves, which helped preserve and spread the beauty of ancient cave art.
          </p>

          <h3 className="artist-name">
          <b>Claude Monet</b></h3>
          <p>
Mia is obsessed with impressionism, especially the dreamy paintings of Claude Monet. Monet's famous series of 
water lilies and gardens show the magic of colours, light and shifting shadows.
          </p>

          <h3 className="artist-name">
          <b>Antoni Gaudi</b></h3>
           <p>
The best part of modern architect is the imaginative artwork of Antoni Gaudi, whose colorful, nature-inspired
 buildings make Barcelona one of Mia's favourite city accross the world.
          </p>
          <br></br>
    </div>
  )
}

export default Artists