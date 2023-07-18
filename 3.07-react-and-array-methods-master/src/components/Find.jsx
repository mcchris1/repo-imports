import Flavor from "./Flavor.jsx";

function Find(props) {
  const sorbet = props.flavors.find(flavor => flavor.name.includes("Sorbet"))
   return (
     <section>
       <h2>Sorbet Flavors</h2>
       <div className="Flavors">
         <Flavor flavor={sorbet} />
       </div>
     </section>
   );
}

export default Find;
