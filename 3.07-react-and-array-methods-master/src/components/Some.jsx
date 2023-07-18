function Some(props) {
  const woCC = props.flavors.some(flavor => !flavor.hasChocolateChips)
   return (
     <div>
       <h2>Comes without Chocolate Chips</h2>
       <div>
         {woCC ? <p>YES</p> : <p>NO</p>}
       </div>
     </div>
   );
}

export default Some;
