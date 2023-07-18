import Flavor from "./Flavor.jsx";

function Filter(props) {
  const wCC = props.flavors.filter(flavor => flavor.hasChocolateChips)
   return (
     <section>
       <h2>Comes with Chocolate Chips</h2>
       <div className="flavors">
         {wCC.map(flavor => <Flavor flavor={flavor} />)}
       </div>
     </section>
   );
}

export default Filter;
