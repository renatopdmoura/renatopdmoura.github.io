#ifndef MATH_H
#define MATH_H

#ifdef MATHLIBRARY_EXPORTS
#define MATHLIBRARY_API __declspec(dllexport)
#else
#define MATHLIBRARY_API __declspec(dllimport)
#endif

extern "C" MATHLIBRARY_API int sum(int a, int b);
extern "C" MATHLIBRARY_API int subtract(int a, int b);
extern "C" MATHLIBRARY_API int multiply(int a, int b);
extern "C" MATHLIBRARY_API int division(int a, int b);

#endif

// - CL math.cpp /link /DLL /OUT:math.dll
// - CL /EHsc calulatot.cpp math.lib