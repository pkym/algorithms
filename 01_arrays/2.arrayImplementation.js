class MyArray {

    constructor() { //클래스 생성시 실행될 초기함수
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index]; // 생성자에서 생성한 데이터를 참조
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;

        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];

        delete this.data[this.length - 1];
        this.length--;

        return lastItem;
    }

    delete(index) {
        const item = this.data[index];

        this.shiftItems(index);

        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]; //삭제원하는 아이템 부터 끝까지 자리를 옮김(앞으로 한자리씩)
        }

        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();

newArray.push("hi");
newArray.push("you");
newArray.push("!");

newArray.pop();

newArray.delete(1);

console.log(newArray);
