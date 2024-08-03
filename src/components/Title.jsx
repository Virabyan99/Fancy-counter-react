export default function Title({locked}) {
  
  return  <h1 className="title">{locked ? <span>Buy a <b>Pro</b> Version for 5+</span> : "Fancy Counter"}</h1>
}

