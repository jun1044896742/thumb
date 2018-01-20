class PraiseButton{
	constructor(num,ele){
		this.num =num;
		this.ele = ele;
	}

	clickButton(){
		this.ele.onclick = ()=>{
			if(this.num>10){
				this.num = 0;
				for(let i = 0 ;i<this.ele.childNodes.length;i++){
					if(!!this.ele.children[i]){
						this.ele.children[i].style.backgroundColor = '#f1f1f1';
						if(this.ele.children[i].className==='arm'){
							this.ele.children[i].style.borderTop = '2px solid #e4e4e4';
						}else if(this.ele.children[i].className==='finger'){
							this.ele.children[i].style.border = '1px solid #e4e4e4';
							this.ele.children[i].style.borderLeft = '0';
						}
					}
				this.ele.style.backgroundColor = '#f1f1f1';
			}
		  }else if(this.num ===1){
				for(let i = 0 ;i<this.ele.childNodes.length;i++){
					if(!!this.ele.children[i]){
						this.ele.children[i].style.backgroundColor = 'rgb(239,184,157)';
						if(this.ele.children[i].className==='arm'){
							this.ele.children[i].style.borderTop = '2px solid rgb(185,122,79)';
						}else if(this.ele.children[i].className==='finger'){
							this.ele.children[i].style.border = '1px solid rgb(185,122,79)';
							this.ele.children[i].style.borderLeft = '0';
						}
					}
				this.ele.style.backgroundColor = 'rgb(239,184,157)';
			}

		  }
		  console.log(this.num);
		  this.num++;
		}
		
	}
}

class Thumb extends PraiseButton{
	constructor(num,ele){
		super(num,ele);
	}

}
let ele = document.getElementsByClassName('hand')[0];
console.log(ele)
let tumb = new Thumb(0,ele);
tumb.clickButton();
    



