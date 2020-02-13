def truncate(n, decimals=0):
    multiplier = 10 ** decimals
    return int(n * multiplier) / multiplier

def english_grade_6_prediction(queryset):
    # Group 1: 20%
    # Group 2: 42.5%
    # Group 3: 37.5%
    
    group1_sum = 0
    group2_sum = 0
    group3_sum = 0

    #counts for average calculation
    group1_count = 0
    group2_count = 0
    group3_count = 0

    # Separating the grades
    for grade in queryset:
        # print(grade.assignment.tek_choice)
        if grade.assignment.tek_choice == 'g1':
            group1_sum += grade.grade
            group1_count +=1
        elif grade.assignment.tek_choice == 'g2':
            group2_sum += grade.grade
            group2_count += 1
        else:
            group3_sum += grade.grade
            group3_count += 1
    #calculating averages for final calculation
    # Remember to check if there is a count that is 0
    if (group1_count != 0):
       group1_avg_weighted = (group1_sum / group1_count) * .2 
    else:
        group1_avg_weighted = 0
    
    if (group2_count != 0):
        group2_avg_weighted = (group2_sum / group2_count) * .425
    else:
        group2_avg_weighted = 0
        
    if (group3_count != 0):
        group3_avg_weighted = (group3_sum / group3_count) * .375
    else: 
        group3_avg_weighted = 0

    print(group3_avg_weighted)

    prediction = truncate((group1_avg_weighted + group2_avg_weighted + group3_avg_weighted), 2)

    return prediction