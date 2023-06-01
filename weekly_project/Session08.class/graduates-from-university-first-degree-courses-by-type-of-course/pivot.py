import pandas as pd

# Read the subsetted data into a pandas dataframe
df = pd.read_csv('filtered_subsetted_data.csv')

# Create a pivot table showing the total number of graduates by year and course
pivot_table = pd.pivot_table(df, values='no_of_graduates', index=['year'], columns=['type_of_course'], aggfunc=sum)

# Print the pivot table
print(pivot_table)
