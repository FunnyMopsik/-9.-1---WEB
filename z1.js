function calculator(a,b){
	this.read=function(){
		this.a=prompt("Vvedite znachenie",0);
		this.b=prompt("Vvedite znachenie",0);
	},
	this.sum=function(){
		let sum;
		sum=this.a+this.b;
		return sum;
	},
	this.mul=function()
  {
		let mul;
		mul=this.a*this.b;
		return mul;
	}
}

let constr = new calculator(0,0);



function Constructor(startingValue){
	this.startingValue=startingValue,
	this.add=function()
	{
    this.value+= +prompt("Vvedite znachenie",0);
    return this;
	}
}

let pr = new Constructor(15);

console.log(pr.add());