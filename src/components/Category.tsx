import categoryIcon from "@/util/findCategoryIcon"

type Category={
text: string,
}


export const Category = (props: Category)=>{

    const icons = categoryIcon(props)
    return  <div className="flex flex-col items-center gap-1 p-5" >
    <div className="items-center">{icons.icon}</div>
    <p className="m-0 p-0">{props.text}</p>
  </div>
}