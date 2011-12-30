using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace ReadLines
{
    class Program
    {
        static void Main(string[] args)
        {
            var path = args[0];
            var keyword = args[1];
            var lines = File.ReadLines(path);
            var result = lines.Where(line => line.Contains(keyword)).ToArray();
            foreach (var item in result)
            {
                Console.WriteLine(item);
            }
            Console.ReadLine();
        }
    }
}
