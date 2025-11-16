import {Flexbox} from 'bluestar';
import useWeatherData from './services/useWeatherData';
import PingPong from './components/PingPong';

function App() {

  const weather = useWeatherData();

  return (
    <Flexbox direction='column' gap={16}>
      <Flexbox direction='column' gap={8}>
        <h1>Header</h1>
        <h3>Sub header</h3>
      </Flexbox>

      <Flexbox justifyContent='space-between' grow={1} gap={8}>
        <Flexbox direction='column' gap={16} style={{maxwidth: '45%'}}>
          <h1>Gap of 16</h1>
          <p style={{wordWrap: 'break-word'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut mi mauris. Sed in justo eu enim ultricies tincidunt. Sed nisi mauris, faucibus quis justo ut, aliquet pretium neque. Cras laoreet iaculis neque a tincidunt. Morbi urna lacus, molestie a nibh in, dapibus porta elit. Morbi vestibulum ligula laoreet neque mollis, eu pulvinar mauris condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed cursus odio, vel tristique orci. Vivamus tempus lectus quis hendrerit pulvinar. Nulla non gravida ex. Aliquam rhoncus, dui non consequat egestas, metus massa auctor quam, viverra imperdiet risus metus id nunc. Aenean placerat metus fringilla diam cursus lobortis. Praesent viverra, nunc ut bibendum lobortis, turpis nisi rutrum erat, sed euismod nunc leo a magna. Phasellus interdum, libero eu interdum imperdiet, sem ante tempor metus, a commodo nisl quam non est.
          </p>
          <p>
            In condimentum sapien vel vestibulum efficitur. Nullam fermentum felis faucibus quam maximus congue. Vestibulum ipsum orci, blandit eget tempor at, rutrum vitae ante. Nulla scelerisque sodales nisi et malesuada. Maecenas leo velit, fringilla id sagittis ac, blandit ut lorem. Curabitur scelerisque, velit ut vulputate vestibulum, nibh ligula tempor ligula, a porttitor tortor lorem nec velit. Fusce tempus in enim id viverra. Praesent id lacus in sem consectetur suscipit. Ut luctus viverra dignissim.
          </p>
        </Flexbox>

        <Flexbox direction='column' gap={24} style={{maxwidth: '45%'}}>
          <h1>Gap of 24</h1>
          <p>
            Quisque augue lorem, faucibus ac venenatis et, sodales ac purus. Cras nec est ut justo luctus molestie. Nam congue, metus et tristique sollicitudin, massa turpis egestas lacus, vel pretium ex ipsum eget libero. Morbi consequat mi eu eros iaculis blandit eget eu ligula. Nam mattis volutpat ante sit amet pretium. Curabitur sed erat et erat maximus commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu sagittis magna. Aliquam egestas leo vitae consequat faucibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut mi mauris. Sed in justo eu enim ultricies tincidunt. Sed nisi mauris, faucibus quis justo ut, aliquet pretium neque. Cras laoreet iaculis neque a tincidunt. Morbi urna lacus, molestie a nibh in, dapibus porta elit. Morbi vestibulum ligula laoreet neque mollis, eu pulvinar mauris condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed cursus odio, vel tristique orci. Vivamus tempus lectus quis hendrerit pulvinar. Nulla non gravida ex. Aliquam rhoncus, dui non consequat egestas, metus massa auctor quam, viverra imperdiet risus metus id nunc. Aenean placerat metus fringilla diam cursus lobortis. Praesent viverra, nunc ut bibendum lobortis, turpis nisi rutrum erat, sed euismod nunc leo a magna. Phasellus interdum, libero eu interdum imperdiet, sem ante tempor metus, a commodo nisl quam non est.
          </p>
          <p>
            In condimentum sapien vel vestibulum efficitur. Nullam fermentum felis faucibus quam maximus congue. Vestibulum ipsum orci, blandit eget tempor at, rutrum vitae ante. Nulla scelerisque sodales nisi et malesuada. Maecenas leo velit, fringilla id sagittis ac, blandit ut lorem. Curabitur scelerisque, velit ut vulputate vestibulum, nibh ligula tempor ligula, a porttitor tortor lorem nec velit. Fusce tempus in enim id viverra. Praesent id lacus in sem consectetur suscipit. Ut luctus viverra dignissim.
          </p>
        </Flexbox>  
      </Flexbox>

      <PingPong/>

      <Flexbox justifyContent='space-evenly'>
        {weather?.map((w, i) => (
          <pre key={i}>
            {JSON.stringify(w, null, 2)}
          </pre>
          ))
        }
      </Flexbox>
    </Flexbox>
  )
}

export default App
