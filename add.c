unsigned int add(unsigned int number1, unsigned int number2, int carryOver,
		int shift, unsigned result) {
	if (number1 == 0 && number2 == 0 && carryOver == 0) {
		return result;
	} else {
		int newCarryOver = 0;
		unsigned int temp = 0;
		if (((number1 & 1) == 1) && ((number2 & 1) == 1)) {
			newCarryOver = 1;
		}
		temp = (number1 & 1) ^ (number2 & 1);
		if (temp == 1 && carryOver == 1) {
			newCarryOver = 1;
		}
		temp = temp ^ carryOver;
		result = (temp << shift) | result;
		++shift;
		return add(number1 >> 1, number2 >> 1, newCarryOver, shift, result);
	}
}
