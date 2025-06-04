const reaction = {
  createElement : (tag, props,  ...children)=>{

    // 요소 노드 생성
    const elem = document.createElement(tag);

    // 속성 추가
    // props 를 객체로 들고 옴
    if(props){
      for(const attr in props){
        const  value = props[attr];
        elem.setAttribute(attr,value);
      }
    }

    // 자식 노드 추가
    for(let child of children){
      if(typeof child === 'string' || typeof child === 'number'){
        child = document.createTextNode(child);
      }
      elem.appendChild(child);
    }

    // const div = reaction.createElement("div", { id: "myDiv", class: "box" });
    // for(const attrName in props) // 'id', 'class'
    // elem.setAttribute("id", "myDiv");    
    // elem.setAttribute("class", "box"); 

    return elem;
  }

};

export default reaction;