export class Product {
    ProductNo: number;
    ProductCode: string;
    ProductName: string;
    ProductNameEng: string;
    ProductDesc: string;
    ProductImgPath: string;
    ProductCategoryID: number;
    ProductCategory: string;
    ProductBrand: string;
    TableHead1: string;
    TableHead2: string;
    TableHead3: string;
    TableHead4: string;
    TableHead5: string;
    TableHead6: string;
    TableHead7: string;
    TableHead8: string;
    TableDetail: TableDetail[] = [];

}
export class TableDetail {
    TableDetailNo: number;
    TableDetail1: string;
    TableDetail2: string;
    TableDetail3: string;
    TableDetail4: string;
    TableDetail5: string;
    TableDetail6: string;
    TableDetail7: string;
    TableDetail8: string;
    ProductNo: number;
}
export class Account {
    AccountNo: number;
    Username: string;
    Password: string;
}
export class Company {
    CompanyNo: number;
    CompanyName: string;
    CompanyDesc: string;
    Email: string;
    Tel: string;
    Facebook: string;
    Line: string;
    Address: string;
    QRCode: string
}

export class Category {
    brand = [
        {
            name:'KANOK Products',
            category: ['วาล์วน้ำ' , 'สายส่งน้ำ / ตัวกรองน้ำ' , 'หัวฉีด / สปริงเกอร์','เครื่องตั้งเวลารดน้ำ','ท่อ','อะไหร่ปั๊ม','อุปกรณ์ตกแต่งสวน / หมวกนิรภัย']
        },
        {
            name: 'Nano Electrics',
            category: ['กล่อง / ตู้กันน้ำพลาสติก', 'แผงไฟฟ้าพลาสติก', 'สายเคเบิล / รางพลาสติกเก็บสาย', 'ท่อ / ข้อต่อ']
        },
        {
            name:'Zeberg',
            category: ['ปลั๊ก / สวิตช์', 'สะพานไฟ / วงจร / เบรคเกอร์', 'สายเคเบิล', 'มิเตอร์ไฟฟ้า / ฉนวนไฟฟ้า', 'พัดลม', 'ท่อพีวีซี', 'หลอดไฟ / ฟิวส์ / ไซเรน','ปั้มน้ำ']
        }
    ]
}
