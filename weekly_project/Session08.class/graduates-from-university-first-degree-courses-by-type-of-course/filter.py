import pandas as pd

# Read the data into a pandas dataframe
df = pd.read_csv('graduates-from-university-first-degree-courses-by-type-of-course.csv')

# Filter the data to keep only the desired courses
desired_courses = ['Accountancy', 'Business & Administration', 'Dentistry', 'Health Sciences',
                   'Information Technology', 'Law', 'Medicine', 'Natural, Physical & Mathematical Sciences']
df_filtered = df[df['type_of_course'].isin(desired_courses)]

# Drop rows where no_of_graduates is 'na'
df_filtered = df_filtered[df_filtered['no_of_graduates'] != 'na']

# Convert the no_of_graduates column to numeric type
df_filtered['no_of_graduates'] = pd.to_numeric(df_filtered['no_of_graduates'])

# Subset the data to show only female students who graduated between 2005 and 2010
df_subset = df_filtered[(df_filtered['sex'] == 'Females') & (df_filtered['year'].between(2005, 2010))]

# Save the subsetted data to a new CSV file
df_subset.to_csv('filtered_subsetted_data.csv', index=False)

# Print a message indicating that the file has been saved
print('Subsetted data saved to subsetted_data.csv')
