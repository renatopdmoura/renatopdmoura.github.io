#include <iostream>
#include "math.hpp"

int main(){
	system("cls");
	// - Variables definition
	char option = '\0';
	int valueA = 0, valueB = 0, result = 0;
	
	// - Values input
	std::cout << "Insert value A: ";
	std::cin >> valueA;
	std::cout << "Insert value B: ";
	std::cin >> valueB; 

	system("cls");

	// - Operation input
	std::cout << "Choose how to operate " << valueA << " and " << valueB << ": [+][-][*][/]\n";
	std::cout << "> ";
	std::cin >> option;
	switch(option){
		case '+':{
			result = sum(valueA, valueB);			
			break;
		}
		case '-':{
			result = subtract(valueA, valueB);			
			break;
		}
		case '*':{
			result = multiply(valueA, valueB);			
			break;
		}
		case '/':{
			result = division(valueA, valueB);			
			break;
		}
	}
	std::cout << valueA << option << valueB << "=" << result << std::endl;
	return 0;
}