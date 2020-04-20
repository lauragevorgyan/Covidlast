import { Component, OnInit } from '@angular/core';
import {text} from '../model';
import {CovidService} from '../../covid-service';
import {stringify} from 'querystring';

@Component({
  selector: 'app-large-info',
  templateUrl: './large-info.component.html',
  styleUrls: ['./large-info.component.css']
})
export class LargeInfoComponent implements OnInit {
  participantId: string;
  siteName: string;
  dateOfEnrolment: string;
  infectionWithPathogen: string;
  feverishnessOrMeasured: string;
  cough: string;
  dyspnoeaOrTechypnoea: string;
  clinicalSuspicionARI: string;

  sexAtBirth: string;
  dateOfBirth: string;
  ageYears: number;
  ageMonths: number;
  healthcareWorker: string;
  laboratoryWorker: string;
  pregnant: string;
  pregnantWeeks: string;

  symptonOnset:string;
  admissionDate: string;
  temperature: string;
  healthRate: string;
  respiratoryRate: string;
  BPsystolic: string;
  BPdiastolic: string;
  severeDehydration: string;
  sternalCapillary: string;
  oxygenSaturation: string;
  oxygencheck: string;
  glasgowComaScore: string;
  mainutrition: string;
  armCircumference: string;
  armCircumferenceheight: string;
  armCircumferenceWeight: string;

  chroniccardiac: string;
  diabetes: string;
  hypertension: string;
  currentsmoking: string;
  chronicpulmonary: string;
  tuberculosis: string;
  asthma: string;
  asplenia: string;
  chronickidney: string;
  malignantneoplasm: string;
  chronicliver: string;
  chronicneurologicaldisorder: string;
  COMorbitiesOther: string;
  COMorbitiesYes: string;
  hiv: string;


  ace_inhibitors: string;
  arbs: string;
  nsaid: string;


  historyOfFever: string;
  lower_chest_wall_indrawing: string;
  admission_cough: string;
  with_sputum_production: string;
  with_haemptysis: string;
  headache: string;
  altered_conscousness: string;
  sore_throat: string;
  seizures:string;
  abdominal_pain: string;
  runny_nose: string;
  vomiting: string;
  wheezing: string;
  diarrhoea: string;
  chest_pain: string;
  conjunctivitis: string;
  muscle_aches: string;
  skin_rash: string;
  joint_pain: string;
  skin_ulcers: string;
  fatigue_malaise: string;
  shortness_of_breath: string;
  lymphadenopathy: string;
  inability_to_walk: string;
  bleeding: string;
  bleedingYes: string;
  admission_other: string;
  admission_other_yes: string;


  oral_fluids: string;
  intravenous_fluids: string;
  antiviral: string;
  antiviral_yes: string;
  antiviral_yes_other: string;
  corticosteroid: string;
  corticosterois_yes: string;
  corticosterois_daily_dose: string;
  antibiotic: string;
  antifungal_agent: string;
  antimalarial_agent: string;
  antimalarial_agent_yes: string;
  experiment_agent: string;
  experiment_agent_yes: string;
  non_steroidal_anti_inflamatory: string;
  angiotensin_converting_enzyme: string;
  angitensin_receptor_blockers: string;


  icu_or_high_dependency: string;
  oxygen_therapy: string;
  o2_flow: string;
  source_of_oxygen: string;
  interface: string;
  non_invasive_ventilation: string;
  invasive_ventilation: string;
  introper_vassopressors: string;
  ecmo: string;
  prone_position: string;

  haemoglobin: string;
  creatinine: string;
  wbc_count: string;
  sodium: string;
  haemotocrit: string;
  pottasium: string;
  plateles: string;
  procalacitonim: string;
  aptt_aptr: string;
  crp: string;
  pt: string;
  ldh: string;
  inr: string;
  creatine_kinase: string;
  alt_sgpt: string;
  troponim: string;
  total_bilirubin: string;
  esr: string;
  ast_sgot: string;
  d_dimer: string;
  urea_bun: string;
  ferritin: string;
  lactate: string;
  il_6: string;


  vital_sighns_temperature: string;
  heart_rate: string;
  respiratory_rate: string;
  bp_systolic: string;
  bp_diastolic: string;
  severe_dehydration: string;
  sternal_capillary_refill_time_upper_2: string;
  glasgow_come_score: string;
  oxygen_saturation_percent: string;
  oxygen_saturation_on: string;

  daily_clinical_feautres_cough: string;
  daily_clinical_feautres_seizures: string;
  daily_clinical_feautres_and_sputum_production: string;
  daily_clinical_feautres_vomiting_neusea: string;
  daily_clinical_feautres_sore_throat: string;
  daily_clinical_feautres_diarrhoea: string;
  daily_clinical_feautres_chest_pain: string;
  daily_clinical_feautres_conjuctivitis: string;
  daily_clinical_feautres_shortness_of_breath: string;
  daily_clinical_feautres_myalagia: string;
  daily_clinical_feautres_confusion: string;
  daily_clinical_feautres_other: string;


  laboratory_results_haemoglobin: string;
  laboratory_results_creatinine: string;
  laboratory_results_wbc_count: string;
  laboratory_results_sodium: string;
  laboratory_results_haematocrit: string;
  laboratory_results_potassium: string;
  laboratory_results_platelets: string;
  laboratory_results_procalcitonin: string;
  laboratory_results_aptt_aptr: string;
  laboratory_results_crp: string;
  laboratory_results_pt: string;
  laboratory_results_ldh: string;
  laboratory_results_inr: string;
  laboratory_results_creatine_kinase: string;
  laboratory_results_alt_sgpt: string;
  laboratory_results_troponin: string;
  laboratory_results_total_bilirubin: string;
  laboratory_results_esr: string;
  laboratory_results_ast_sgot: string;
  laboratory_results_d_dimer: string;
  laboratory_results_urea: string;
  laboratory_results_ferritin: string;
  laboratory_results_lactate: string;
  laboratory_results_il_6: string;


  currently_receiving_oral_orgastric_fluids: string;
  currently_receiving_intravenous_fluids: string;
  currently_receiving_antiviral: string;
  currently_receiving_antiviral_yes: string;
  currently_receiving_corticosteroid: string;
  currently_receiving_corticosteroid_yes: string;
  currently_receiving_corticosteroid_daily_dose: string;
  currently_receiving_antibiotic: string;
  currently_receiving_antifungal_agent: string;
  currently_receiving_antimalarial_agent: string;
  currently_receiving_experiment_agent: string;
  currently_receiving_experiment_agent_yes: string;
  currently_receiving_nsaid: string;
  currently_receiving_angletonsin_enzyme_inbitors: string;
  currently_receiving_arbs: string;


  currently_receiving_icu_or_high_dependency_admission: string;
  currently_receiving_icu_hdu_date: string;
  currently_receiving_icu_hdu_discharge_date: string;
  currently_receiving_oxygen_therapy: string;
  currently_receiving_oxygen_therapy_o2_flow: string;
  currently_receiving_oxygen_therapy_source_of_oxygen: string;
  currently_receiving_oxygen_therapy_interface: string;
  currently_receiving_non_invasive_ventilation: string;
  currently_receiving_invasive_ventilation: string;
  currently_receiving_intropes_vasopressors: string;
  currently_receiving_oxygen_ecmo_support: string;
  currently_receiving_prone_position: string;
  currently_receiving_rrt_dialysis: string;


  chest_x_ray: string;
  inflitrates_present: string;
  pathogen_testing_done_ilness_episode: string;
  influenza_virus: string;
  influenza_virus_positive: string;
  coronavirus: string;
  coronavirus_positive: string;
  other_respiratory_pathogen: string;
  viral_haemorhagic: string;
  viral_haemorhagic_positive: string;
  diagnostic_pathogen_testing_other_respiratory_pathogen: string;
  publice_health_interest_detected: string;
  falciparum_malaria: string;
  non_falciparum_malaria: string;
  diagnostoc_pathogen_testing: string;


  shock: string;
  bacteraemia: string;
  seizure: string;
  during_hospitalization_patent_experience_bleeding: string;
  menigitis_encephalitis: string;
  endocarditis: string;
  anaemia: string;
  myocarditis_pericarditis: string;
  cardiac_arrhythmia: string;
  acute_renal_injure: string;
  cardiac_arrest: string;
  pancreatitis: string;
  pneumonia: string;
  liver_dysfunction: string;
  bronchiolitis: string;
  cardiomyopathy: string;
  acute_respiratory_distress_syndome: string;
  during_hospitalization_patent_experience_other: string;

  while_hospitalised_or_discharge_oral_fluids: string;
  while_hospitalised_or_discharge_intravenous: string;
  while_hospitalised_or_discharge_antiviral: string;
  while_hospitalised_or_discharge_antiviral_yes: string;
  while_hospitalised_or_discharge_antibiotic: string;
  while_hospitalised_or_discharge_corticosteroid: string;
  while_hospitalised_or_discharge_corticosteroid_yes: string;
  while_hospitalised_or_discharge_corticosteroid_daily_dose: string;
  while_hospitalised_or_discharge_antifungal_agent: string;
  while_hospitalised_or_discharge_antimalarial_agent: string;
  while_hospitalised_or_discharge_experiment_agent: string;
  while_hospitalised_or_discharge_nsaid: string;


  any_time_during_hospitalisation_icu_high_dependency_unit_admission: string;
  any_time_during_hospitalisation_date_of_icu_addmission: string;
  any_time_during_hospitalisation_oxygen_therapy: string;
  any_time_during_hospitalisation_oxygen_therapy_total_duration: string;
  any_time_during_hospitalisation_oxygen_therapy_02_flow: string;
  any_time_during_hospitalisation_oxygen_therapy_source_of_oxygen:string;
  any_time_during_hospitalisation_oxygen_therapy_interface: string;
  any_time_during_hospitalisation_non_invasive_ventilation: string;
  any_time_during_hospitalisation_non_invasive_ventilation_yes: string;
  any_time_during_hospitalisation_invasive_ventilation: string;
  any_time_during_hospitalisation_invasive_ventilation_yes: string;
  any_time_during_hospitalisation_ecmo: string;
  any_time_during_hospitalisation_ecmo_yes: string;
  any_time_during_hospitalisation_prone_position: string;
  any_time_during_hospitalisation_prone_position_yes: string;
  any_time_during_hospitalisation_rrt: string;
  any_time_during_hospitalisation_intropes_vaspopressors: string;
  any_time_during_hospitalisation_intropes_vaspopressors_yes: string;

  outcome: string;
  outcome_date: string;
  ability_to_salf_care_at_dicharge_versus_before_illness: string;

  constructor(private covidService: CovidService) { }

  ngOnInit() {
  }

  logi() {
    console.log(this.participantId+" "+this.siteName+" "+this.dateOfEnrolment+ " "+this.infectionWithPathogen+" "+this.feverishnessOrMeasured+" "+this.cough+" "+this.dyspnoeaOrTechypnoea+" "+this.clinicalSuspicionARI)
  }

  addCRF() {
    const large_info = {
      participantId: this.participantId,
      siteName: this.siteName,
      dateOfEnrolment: this.dateOfEnrolment,
      infectionWithPathogen: this.infectionWithPathogen,
      feverishnessOrMeasured: this.feverishnessOrMeasured,
      cough: this.cough,
      dyspnoeaOrTechypnoea: this.dyspnoeaOrTechypnoea,
      clinicalSuspicionARI: this.clinicalSuspicionARI,
      sexAtBirth: this.sexAtBirth,
      dateOfBirth: this.dateOfBirth,
      ageYears: this.ageYears,
      ageMonths: this.ageMonths,
      healthcareWorker: this.healthcareWorker,
      laboratoryWorker: this.laboratoryWorker,
      pregnant: this.pregnant,
      pregnantWeeks: this.pregnantWeeks,

      symptonOnset: this.symptonOnset,
      admissionDate: this.admissionDate,
      temperature: this.temperature,
      healthRate: this.heart_rate,
      respiratoryRate: this.respiratoryRate,
      BPsystolic: this.BPsystolic,
      BPdiastolic: this.BPdiastolic,
      severeDehydration: this.severeDehydration,
      sternalCapillary: this.sternalCapillary,
      oxygenSaturation: this.oxygenSaturation,
      oxygencheck: this.oxygencheck,
      glasgowComaScore: this.glasgowComaScore,
      mainutrition: this.mainutrition,
      armCircumference: this.armCircumference,
      armCircumferenceheight: this.armCircumferenceheight,
      armCircumferenceWeight: this.armCircumferenceWeight,

      chroniccardiac: this.chroniccardiac,
      diabetes: this.diabetes,
      hypertension: this.hypertension,
      currentsmoking: this.currentsmoking,
      chronicpulmonary: this.chronicpulmonary,
      tuberculosis: this.tuberculosis,
      asthma: this.asthma,
      asplenia: this.asplenia,
      chronickidney: this.chronickidney,
      malignantneoplasm: this.malignantneoplasm,
      chronicliver: this.chronicliver,
      chronicneurologicaldisorder: this.chronicneurologicaldisorder,
      COMorbitiesOther: this.COMorbitiesOther,
      COMorbitiesYes: this.COMorbitiesYes,
      hiv: this.hiv,


      ace_inhibitors: this.ace_inhibitors,
      arbs: this.arbs,
      nsaid: this.nsaid,


      historyOfFever: this.historyOfFever,
      lower_chest_wall_indrawing: this.lower_chest_wall_indrawing,
      admission_cough: this.admission_cough,
      with_sputum_production: this.with_sputum_production,
      with_haemptysis: this.with_haemptysis,
      headache: this.headache,
      altered_conscousness: this.altered_conscousness,
      sore_throat: this.sore_throat,
      seizures: this.seizures,
      abdominal_pain: this.abdominal_pain,
      runny_nose: this.runny_nose,
      vomiting: this.vomiting,
      wheezing: this.wheezing,
      diarrhoea: this.diarrhoea,
      chest_pain: this.chest_pain,
      conjunctivitis: this.conjunctivitis,
      muscle_aches: this.muscle_aches,
      skin_rash: this.skin_rash,
      joint_pain: this.joint_pain,
      skin_ulcers: this.skin_ulcers,
      fatigue_malaise: this.fatigue_malaise,
      shortness_of_breath: this.shortness_of_breath,
      lymphadenopathy: this.lymphadenopathy,
      inability_to_walk: this.inability_to_walk,
      bleeding: this.bleeding,
      bleedingYes: this.bleedingYes,
      admission_other: this.admission_other,
      admission_other_yes: this.admission_other_yes,


      oral_fluids: this.oral_fluids,
      intravenous_fluids: this.intravenous_fluids,
      antiviral: this.antiviral,
      antiviral_yes: this.antiviral_yes,
      antiviral_yes_other: this.antiviral_yes_other,
      corticosteroid: this.corticosteroid,
      corticosterois_yes: this.corticosterois_yes,
      corticosterois_daily_dose: this.corticosterois_daily_dose,
      antibiotic: this.antibiotic,
      antifungal_agent: this.antifungal_agent,
      antimalarial_agent: this.antimalarial_agent,
      antimalarial_agent_yes: this.antimalarial_agent_yes,
      experiment_agent: this.experiment_agent,
      experiment_agent_yes: this.experiment_agent_yes,
      non_steroidal_anti_inflamatory: this.non_steroidal_anti_inflamatory,
      angiotensin_converting_enzyme: this.angiotensin_converting_enzyme,
      angitensin_receptor_blockers: this.angitensin_receptor_blockers,


      icu_or_high_dependency: this.icu_or_high_dependency,
      oxygen_therapy: this.oxygen_therapy,
      o2_flow: this.o2_flow,
      source_of_oxygen: this.source_of_oxygen,
      interface: this.interface,
      non_invasive_ventilation: this.non_invasive_ventilation,
      invasive_ventilation: this.invasive_ventilation,
      introper_vassopressors: this.introper_vassopressors,
      ecmo: this.ecmo,
      prone_position: this.prone_position,

      haemoglobin: this.haemoglobin,
      creatinine: this.creatinine,
      wbc_count: this.wbc_count,
      sodium: this.sodium,
      haemotocrit: this.haemotocrit,
      pottasium: this.pottasium,
      plateles: this.plateles,
      procalacitonim: this.procalacitonim,
      aptt_aptr: this.aptt_aptr,
      crp: this.crp,
      pt: this.pt,
      ldh: this.ldh,
      inr: this.inr,
      creatine_kinase: this.creatine_kinase,
      alt_sgpt: this.alt_sgpt,
      troponim: this.troponim,
      total_bilirubin: this.total_bilirubin,
      esr: this.esr,
      ast_sgot: this.ast_sgot,
      d_dimer: this.d_dimer,
      urea_bun: this.urea_bun,
      ferritin: this.ferritin,
      lactate: this.lactate,
      il_6: this.il_6,


      vital_sighns_temperature: this.vital_sighns_temperature,
      heart_rate: this.heart_rate,
      respiratory_rate: this.respiratory_rate,
      bp_systolic: this.bp_systolic,
      bp_diastolic: this.bp_diastolic,
      severe_dehydration: this.severe_dehydration,
      sternal_capillary_refill_time_upper_2: this.sternal_capillary_refill_time_upper_2,
      glasgow_come_score: this.glasgow_come_score,
      oxygen_saturation_percent: this.oxygen_saturation_percent,
      oxygen_saturation_on: this.oxygen_saturation_on,

      daily_clinical_feautres_cough: this.daily_clinical_feautres_cough,
      daily_clinical_feautres_seizures: this.daily_clinical_feautres_seizures,
      daily_clinical_feautres_and_sputum_production: this.daily_clinical_feautres_and_sputum_production,
      daily_clinical_feautres_vomiting_neusea: this.daily_clinical_feautres_vomiting_neusea,
      daily_clinical_feautres_sore_throat: this.daily_clinical_feautres_sore_throat,
      daily_clinical_feautres_diarrhoea: this.daily_clinical_feautres_diarrhoea,
      daily_clinical_feautres_chest_pain: this.daily_clinical_feautres_chest_pain,
      daily_clinical_feautres_conjuctivitis: this.daily_clinical_feautres_conjuctivitis,
      daily_clinical_feautres_shortness_of_breath: this.daily_clinical_feautres_shortness_of_breath,
      daily_clinical_feautres_myalagia: this.daily_clinical_feautres_myalagia,
      daily_clinical_feautres_confusion: this.daily_clinical_feautres_confusion,
      daily_clinical_feautres_other: this.daily_clinical_feautres_other,


      laboratory_results_haemoglobin: this.laboratory_results_haemoglobin,
      laboratory_results_creatinine: this.laboratory_results_creatinine,
      laboratory_results_wbc_count: this.laboratory_results_wbc_count,
      laboratory_results_sodium: this.laboratory_results_sodium,
      laboratory_results_haematocrit: this.laboratory_results_haematocrit,
      laboratory_results_potassium: this.laboratory_results_potassium,
      laboratory_results_platelets: this.laboratory_results_platelets,
      laboratory_results_procalcitonin: this.laboratory_results_procalcitonin,
      laboratory_results_aptt_aptr: this.laboratory_results_aptt_aptr,
      laboratory_results_crp: this.laboratory_results_crp,
      laboratory_results_pt: this.laboratory_results_aptt_aptr,
      laboratory_results_ldh: this.laboratory_results_ldh,
      laboratory_results_inr: this.laboratory_results_inr,
      laboratory_results_creatine_kinase: this.laboratory_results_creatine_kinase,
      laboratory_results_alt_sgpt: this.laboratory_results_alt_sgpt,
      laboratory_results_troponin: this.laboratory_results_troponin,
      laboratory_results_total_bilirubin: this.laboratory_results_total_bilirubin,
      laboratory_results_esr: this.laboratory_results_esr,
      laboratory_results_ast_sgot: this.laboratory_results_ast_sgot,
      laboratory_results_d_dimer: this.laboratory_results_d_dimer,
      laboratory_results_urea: this.laboratory_results_urea,
      laboratory_results_ferritin: this.laboratory_results_ferritin,
      laboratory_results_lactate: this.laboratory_results_lactate,
      laboratory_results_il_6: this.laboratory_results_il_6,


      currently_receiving_oral_orgastric_fluids: this.currently_receiving_oral_orgastric_fluids,
      currently_receiving_intravenous_fluids: this.currently_receiving_intravenous_fluids,
      currently_receiving_antiviral: this.currently_receiving_antiviral,
      currently_receiving_antiviral_yes: this.currently_receiving_antiviral_yes,
      currently_receiving_corticosteroid: this.currently_receiving_corticosteroid,
      currently_receiving_corticosteroid_yes: this.currently_receiving_corticosteroid_yes,
      currently_receiving_corticosteroid_daily_dose: this.currently_receiving_corticosteroid_daily_dose,
      currently_receiving_antibiotic: this.currently_receiving_antibiotic,
      currently_receiving_antifungal_agent: this.currently_receiving_antifungal_agent,
      currently_receiving_antimalarial_agent: this.currently_receiving_antimalarial_agent,
      currently_receiving_experiment_agent: this.currently_receiving_experiment_agent,
      currently_receiving_experiment_agent_yes: this.currently_receiving_experiment_agent_yes,
      currently_receiving_nsaid: this.currently_receiving_nsaid,
      currently_receiving_angletonsin_enzyme_inbitors: this.currently_receiving_angletonsin_enzyme_inbitors,
      currently_receiving_arbs: this.currently_receiving_arbs,


      currently_receiving_icu_or_high_dependency_admission: this.currently_receiving_icu_or_high_dependency_admission,
      currently_receiving_icu_hdu_date: this.currently_receiving_icu_hdu_date,
      currently_receiving_icu_hdu_discharge_date: this.currently_receiving_icu_hdu_discharge_date,
      currently_receiving_oxygen_therapy: this.currently_receiving_oxygen_therapy,
      currently_receiving_oxygen_therapy_o2_flow: this.currently_receiving_oxygen_therapy_o2_flow,
      currently_receiving_oxygen_therapy_source_of_oxygen: this.currently_receiving_oxygen_therapy_source_of_oxygen,
      currently_receiving_oxygen_therapy_interface: this.currently_receiving_oxygen_therapy_interface,
      currently_receiving_non_invasive_ventilation: this.currently_receiving_non_invasive_ventilation,
      currently_receiving_invasive_ventilation: this.currently_receiving_non_invasive_ventilation,
      currently_receiving_intropes_vasopressors: this.currently_receiving_intropes_vasopressors,
      currently_receiving_oxygen_ecmo_support: this.currently_receiving_oxygen_ecmo_support,
      currently_receiving_prone_position: this.currently_receiving_prone_position,
      currently_receiving_rrt_dialysis: this.currently_receiving_rrt_dialysis,


      chest_x_ray: this.chest_x_ray,
      inflitrates_present: this.inflitrates_present,
      pathogen_testing_done_ilness_episode: this.pathogen_testing_done_ilness_episode,
      influenza_virus: this.influenza_virus,
      influenza_virus_positive: this.influenza_virus_positive,
      coronavirus: this.coronavirus,
      coronavirus_positive: this.coronavirus_positive,
      other_respiratory_pathogen: this.other_respiratory_pathogen,
      viral_haemorhagic: this.viral_haemorhagic,
      viral_haemorhagic_positive: this.viral_haemorhagic_positive,
      diagnostic_pathogen_testing_other_respiratory_pathogen: this.diagnostic_pathogen_testing_other_respiratory_pathogen,
      publice_health_interest_detected: this.publice_health_interest_detected,
      falciparum_malaria: this.falciparum_malaria,
      non_falciparum_malaria: this.non_falciparum_malaria,
      diagnostoc_pathogen_testing: this.diagnostoc_pathogen_testing,


      shock: this.shock,
      bacteraemia: this.bacteraemia,
      seizure: this.seizure,
      during_hospitalization_patent_experience_bleeding: this.during_hospitalization_patent_experience_bleeding,
      menigitis_encephalitis: this.menigitis_encephalitis,
      endocarditis: this.endocarditis,
      anaemia: this.anaemia,
      myocarditis_pericarditis: this.myocarditis_pericarditis,
      cardiac_arrhythmia: this.cardiac_arrhythmia,
      acute_renal_injure: this.acute_renal_injure,
      cardiac_arrest: this.cardiac_arrest,
      pancreatitis: this.pancreatitis,
      pneumonia: this.pneumonia,
      liver_dysfunction: this.liver_dysfunction,
      bronchiolitis: this.bronchiolitis,
      cardiomyopathy: this.cardiomyopathy,
      acute_respiratory_distress_syndome: this.acute_respiratory_distress_syndome,
      during_hospitalization_patent_experience_other: this.during_hospitalization_patent_experience_other,

      while_hospitalised_or_discharge_oral_fluids: this.while_hospitalised_or_discharge_oral_fluids,
      while_hospitalised_or_discharge_intravenous: this.while_hospitalised_or_discharge_intravenous,
      while_hospitalised_or_discharge_antiviral: this.while_hospitalised_or_discharge_antiviral,
      while_hospitalised_or_discharge_antiviral_yes: this.while_hospitalised_or_discharge_antiviral_yes,
      while_hospitalised_or_discharge_antibiotic: this.while_hospitalised_or_discharge_antibiotic,
      while_hospitalised_or_discharge_corticosteroid: this.while_hospitalised_or_discharge_corticosteroid,
      while_hospitalised_or_discharge_corticosteroid_yes: this.while_hospitalised_or_discharge_corticosteroid_yes,
      while_hospitalised_or_discharge_corticosteroid_daily_dose: this.while_hospitalised_or_discharge_corticosteroid_daily_dose,
      while_hospitalised_or_discharge_antifungal_agent: this.while_hospitalised_or_discharge_antifungal_agent,
      while_hospitalised_or_discharge_antimalarial_agent: this.while_hospitalised_or_discharge_antimalarial_agent,
      while_hospitalised_or_discharge_experiment_agent: this.while_hospitalised_or_discharge_experiment_agent,
      while_hospitalised_or_discharge_nsaid: this.while_hospitalised_or_discharge_nsaid,


      any_time_during_hospitalisation_icu_high_dependency_unit_admission: this.any_time_during_hospitalisation_icu_high_dependency_unit_admission,
      any_time_during_hospitalisation_date_of_icu_addmission: this.any_time_during_hospitalisation_icu_high_dependency_unit_admission,
      any_time_during_hospitalisation_oxygen_therapy: this.any_time_during_hospitalisation_oxygen_therapy,
      any_time_during_hospitalisation_oxygen_therapy_total_duration: this.any_time_during_hospitalisation_oxygen_therapy_total_duration,
      any_time_during_hospitalisation_oxygen_therapy_02_flow: this.any_time_during_hospitalisation_oxygen_therapy_02_flow,
      any_time_during_hospitalisation_oxygen_therapy_source_of_oxygen: this.any_time_during_hospitalisation_oxygen_therapy_source_of_oxygen,
      any_time_during_hospitalisation_oxygen_therapy_interface: this.any_time_during_hospitalisation_oxygen_therapy_interface,
      any_time_during_hospitalisation_non_invasive_ventilation: this.any_time_during_hospitalisation_non_invasive_ventilation,
      any_time_during_hospitalisation_non_invasive_ventilation_yes: this.any_time_during_hospitalisation_non_invasive_ventilation_yes,
      any_time_during_hospitalisation_invasive_ventilation: this.any_time_during_hospitalisation_invasive_ventilation,
      any_time_during_hospitalisation_invasive_ventilation_yes: this.any_time_during_hospitalisation_non_invasive_ventilation_yes,
      any_time_during_hospitalisation_ecmo: this.any_time_during_hospitalisation_ecmo,
      any_time_during_hospitalisation_ecmo_yes: this.any_time_during_hospitalisation_ecmo_yes,
      any_time_during_hospitalisation_prone_position: this.any_time_during_hospitalisation_prone_position,
      any_time_during_hospitalisation_prone_position_yes: this.any_time_during_hospitalisation_prone_position_yes,
      any_time_during_hospitalisation_rrt: this.any_time_during_hospitalisation_rrt,
      any_time_during_hospitalisation_intropes_vaspopressors: this.any_time_during_hospitalisation_intropes_vaspopressors,
      any_time_during_hospitalisation_intropes_vaspopressors_yes: this.any_time_during_hospitalisation_intropes_vaspopressors_yes,

      outcome: this.outcome,
      outcome_date: this.outcome_date,
      ability_to_salf_care_at_dicharge_versus_before_illness: this.ability_to_salf_care_at_dicharge_versus_before_illness,

    }

    let large_info_2 = JSON.stringify(large_info);
    this.covidService.addCRF(large_info_2);
  }
}
