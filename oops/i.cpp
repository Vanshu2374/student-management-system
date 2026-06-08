#include<iostream>
using namespace std;
class students{
	public:
		string USN;
		string name;
		string branch;
		string phone;
};
void readData()
{
	cout<<"enter the USN"<<endl;
	cin>>USN;
	cout<<"enter the name"<<endl;
	cin>>name;
	cout<<"enter the branch"<<endl;
	cin>>branch;
	cout<<"enter the phone"<<endl;
	cin>>phone;
}
void displayData()
{
	cout<<"enter the USN"<<USN<<endl;
	cout<<"enter the name"<<name<<endl;
	cout<<"enter the branch"<<branch<<endl;
	cout<<"enter the phone"<<phone<<endl;		
}
int main()
{
	students s1[10];
	int user ,i;
	cout<<"enter the number of students"<<endl;
	cin>>user;
	for (int i=1;i<=user;i++)
	{
	   s1[i].readData()	
	}
	cout<<"USN,name,branch,phone"<<endl;
	for (int i=1;i<=user;i++)
	{
	   s1.[i].displayData()
	}
}